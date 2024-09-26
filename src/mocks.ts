import { createField, Field } from "./models/fields";
import { createGroup, Group } from "./models/groups";
import { createTab, Tab } from "./models/tab";

const groups: Record<string, Group> = {
  "group-id-1": {
    parentId: "tab-id-1",
    parentType: "tab",
    title: "Group 1",
    content: "Group 1 content",
    childrenIds: ["field-id-1", "field-id-2"],
    childrenType: "field",
  },
  "group-id-2": {
    parentId: "tab-id-1",
    parentType: "tab",
    title: "Group 2",
    content: "Group 2 content",
    childrenIds: ["group-id-3"],
    childrenType: "group",
  },
  "group-id-3": {
    parentId: "group-id-2",
    parentType: "group",
    title: "Group 3",
    content: "Group 3 content",
    childrenIds: ["field-id-3"],
    childrenType: "field",
  },
  "group-id-4": {
    parentId: "tab-id-2",
    parentType: "tab",
    title: "Group 4",
    content: "Group 4 content",
    childrenIds: ["field-id-4"],
    childrenType: "field",
  },
};

const tabs: Record<string, Tab> = {
  "tab-id-1": {
    title: "Tab 1",
    content: "Tab 1 content",
    groupsIds: ["group-id-1", "group-id-2"],
  },
  "tab-id-2": {
    title: "Tab 2",
    content: "Tab 2 content",
    groupsIds: ["group-id-4"],
  },
};

const fields: Record<string, Field> = {
  "field-id-1": {
    title: "Field 1",
    value: "Field 1 value",
    groupId: "group-id-1",
  },
  "field-id-2": {
    title: "Field 2",
    value: "Field 2 value",
    groupId: "group-id-1",
  },
  "field-id-3": {
    title: "Field 3",
    value: "Field 3 value",
    groupId: "group-id-3",
  },
  "field-id-4": {
    title: "Field 4",
    value: "Field 4 content",
    groupId: "group-id-4",
  },
};

function initStoreMocks() {
  Object.entries(tabs).forEach(([id, tab]) => {
    createTab(tab, id);
  });

  Object.entries(groups).forEach(([id, group]) => {
    createGroup(group, id);
  });

  Object.entries(fields).forEach(([id, field]) => {
    createField(field, id);
  });
}
