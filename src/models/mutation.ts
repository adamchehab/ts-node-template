export interface Mutation {
  type: "tab" | "group" | "field";
  id: string;
}

export function createUpdateTree(): any {
  // Магия которая парсит массив updatedIds и deletedIds и создает дерево для обновления данных которое потом
  // отправиться на бэкенд

  return {
    deletedFields: [],
    tabs: [
      {
        title: "Tab 1",
        groupds: [{ title: "Group 1", fields: [{ title: "Field 1" }] }],
      },
    ],
    //   ...
  };
}
