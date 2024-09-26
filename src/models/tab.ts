import { deletedIds, tabs, updatedIds } from "@/store";
import { deleteGroup } from "./groups";
import { Mutation } from "./mutation";

export interface Tab {
  title: string;
  content: string;
  groupsIds: string[];
}

export function createTab(data: Tab, id: string) {
  tabs[id] = data;
  updatedIds.push({ type: "tab", id } as Mutation);
}

export function updateTab(data: Tab, id: string) {
  tabs[id] = data;

  updatedIds.push({ type: "tab", id } as Mutation);
}

export function deleteTab(id: string) {
  if (tabs[id]) {
    tabs[id].groupsIds.forEach((groupId) => deleteGroup(groupId));
    delete tabs[id];
    deletedIds.push({ type: "tab", id });
  }
}
