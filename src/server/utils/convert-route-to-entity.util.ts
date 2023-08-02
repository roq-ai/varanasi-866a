const mapping: Record<string, string> = {
  tourisms: 'tourism',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
