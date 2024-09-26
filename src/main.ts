import { createField, updateField } from "./models/fields";
import { createGroup, deleteGroup } from "./models/groups";
import { createUpdateTree } from "./models/mutation";
import { createTab } from "./models/tab";

// открыта новая таба
createTab(
  {
    title: "Tab 3",
    content: "Tab 3 content",
    groupsIds: ["group-id-5"],
  },
  "tab-id-3",
);

createGroup(
  {
    parentId: "tab-id-3",
    parentType: "tab",
    title: "Group 5",
    content: "Group 5 content",
    childrenIds: ["field-id-5"],
    childrenType: "field",
  },
  "group-id-5",
);

// открыта новая группа
createField(
  {
    title: "Field 5",
    value: "Field 5 value",
    groupId: "group-id-5",
  },
  "field-id-5",
);

// Удаление группы
deleteGroup("group-id-5");

// Изменение значения поля
updateField("field-id-5", {
  title: "Field 5",
  value: "New value",
  groupId: "group-id-5",
});

const updateTree = createUpdateTree();
