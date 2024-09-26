import { deletedIds, groups, tabs, updatedIds } from "@/store";
import { deleteField } from "./fields";

export interface Group {
  parentId: string;
  parentType: "tab" | "group";
  title: string;
  content: string;
  childrenIds: string[];
  childrenType: "group" | "field";
}

export function createGroup(data: Group, id: string) {
  groups[id] = data;
  updatedIds.push({ type: "group", id });

  if (data.parentType === "tab") {
    tabs[data.parentId].groupsIds.push(id);
  } else if (data.parentType === "group") {
    groups[data.parentId].childrenIds.push(id);
  }
}

export function updateGroup(id: string, data: Group) {
  if (groups[id]) {
    groups[id] = data;
    updatedIds.push({ type: "group", id });
  }
}

export function deleteGroup(id: string) {
  if (groups[id]) {
    if (groups[id].childrenType === "group") {
      groups[id].childrenIds.forEach((childId: string) => deleteGroup(childId));
    } else {
      groups[id].childrenIds.forEach((childId: string) => deleteField(childId));
    }
    delete groups[id];
    deletedIds.push({ type: "group", id });
  }
}
