import {
  useCallback,
} from 'react';

function useRouter(routes, pathname) {

  const getRouteNames = useCallback((routes, pathname) => {
    const [pathname0, pathname1, pathname2, pathname3] = pathname.split('/');
    let [levelOneLabel, levelTwoLabel] = ["", ""];
    if (pathname2) {
      const path1 = routes.find(() => pathname.includes(pathname2));
      levelOneLabel = path1.label;
      
      if (pathname3) {
        const path2 = path1.children.find(item => item.path.includes(pathname3));
        levelTwoLabel = path2.label;
      }
    }
    document.title = `${levelOneLabel || "React App"}-${levelTwoLabel}`
    return [levelOneLabel, levelTwoLabel]


  }, [routes, pathname]);
  const routeNames = getRouteNames(routes, pathname);

  return routeNames
}

export default useRouter