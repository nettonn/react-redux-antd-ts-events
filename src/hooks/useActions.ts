import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useMemo } from "react";

export function useActions<T>(actions: T, deps?: any): T {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map((a) => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions as any, dispatch);
    },
    // eslint-disable-next-line
    deps ? [dispatch, ...deps] : [dispatch]
  ) as T;
}
