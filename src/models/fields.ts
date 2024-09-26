import { deletedIds, fields, groups, updatedIds } from "../store";

export interface Field {
  title: string;
  value: string;
  groupId: string;
}

export function createField(data: Field, id: string) {
  fields[id] = data;
  updatedIds.push({ type: "field", id });

  groups[data.groupId].childrenIds.push(id);
}

export function updateField(id: string, data: Field) {
  if (fields[id]) {
    fields[id] = data;
    updatedIds.push({ type: "field", id });
  }
}

export function deleteField(id: string) {
  if (fields[id]) {
    delete fields[id];
    deletedIds.push({ type: "field", id });
  }
}
