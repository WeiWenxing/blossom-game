export const games = {

} as const;

export type Games = typeof games;

// 获取其他游戏列表
export function getOtherGames() {
  return Object.values(games);
}
