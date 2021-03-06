export const CATEGORIES_CREATE = "CATEGORIES_CREATE";
export const CATEGORIES_DELETE = "CATEGORIES_DELETE";
export const CATEGORIES_GET = "CATEGORIES_GET";
export const CATEGORIES_UPDATE = "CATEGORIES_UPDATE";
export const CATEGORIES_CLEAR = "CATEGORIES_CLEAR";

const categoriesReducer = (state, { payload, type }) => {
  switch (type) {
    case CATEGORIES_CLEAR:
      return { categories: [] };
    case CATEGORIES_CREATE:
      return { categories: [...state.categories, payload] };
    case CATEGORIES_DELETE:
      return {
        categories: state.categories.filter(
          ({ label, parent }) => (label || parent) !== payload
        ),
      };
    case CATEGORIES_GET:
      return { categories: [...state.categories, ...payload] };
    case CATEGORIES_UPDATE:
      const { previousLabel, updatedLabel } = payload;
      return {
        categories: state.categories.map((category) => {
          if (category.label === previousLabel) {
            return {
              ...category,
              label: updatedLabel,
            };
          }

          if (category.parent === previousLabel) {
            return {
              ...category,
              parent: updatedLabel,
            };
          }

          return category;
        }),
      };

    default:
      return state;
  }
};

export default categoriesReducer;
