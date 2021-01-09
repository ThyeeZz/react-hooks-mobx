import {
  useCallback,
} from 'react';

function useRouter (routes, pathname){

  const getRouteNames =  useCallback((routes, pathname) => {
    const [pathname4,pathname1, pathname2, pathname3] = pathname.split('/');

    const path1 = routes.find(() => pathname.includes(pathname2));
  
    const path2 = path1.children.find(item => item.path.includes(pathname3));

    document.title = `${path1.label}-${path2.label}`
    return [path1.label, path2.label]
  },[routes, pathname]);
  const routeNames = getRouteNames(routes, pathname);

  return routeNames
}

export default useRouter