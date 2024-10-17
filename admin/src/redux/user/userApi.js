import { baseApi } from "@redux/baseApi";

export const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: (params) => {
				return {
					url: `/users/`,
					method: "GET",
					params: params,
				};
			},
			providesTags: ["User"],
		}),

		getUserDetails: builder.query({
			query: (id) => ({
				url: `/users/${id}/`,
				method: "GET",
			}),
			providesTags: ["UserDetails"],
		}),

		getStaffs: builder.query({
			query: (params) => {
				return {
					url: `/staffs/`,
					method: "GET",
					params: params,
				};
			},
			providesTags: ["Staff"],
		}),

		getStaffDetails: builder.query({
			query: (id) => ({
				url: `/staffs/${id}/`,
				method: "GET",
			}),
			providesTags: ["StaffDetails"],
		}),

		createStaff: builder.mutation({
			// eslint-disable-next-line no-unused-vars
			query: ({ data, originalArgs }) => ({
				url: `/staffs/`,
				method: "POST",
				data,
			}),

			async onQueryStarted({ originalArgs }, { queryFulfilled, dispatch }) {
				try {
					const result = await queryFulfilled;

					dispatch(
						baseApi.util.updateQueryData("getStaffs", originalArgs, (draft) => {
							return {
								count: draft.count + 1,
								next: draft.next,
								previous: draft.previous,
								results: [result.data, ...draft.results],
							};
						})
					);
				} catch (error) {
					console.log(error);
				}
			},
			// invalidatesTags: ["Staff"],
		}),
	}),
});

export const {
	useGetUsersQuery,
	useGetUserDetailsQuery,
	useGetStaffsQuery,
	useGetStaffDetailsQuery,
	useCreateStaffMutation,
} = userApi;