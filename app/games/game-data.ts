export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const games: Record<string, Game> = {

};

// 获取其他游戏列表
export function getOtherGames(): Game[] {
  return Object.values(games);
}

