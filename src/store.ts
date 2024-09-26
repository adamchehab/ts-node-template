import { Field } from "./models/fields";
import { Group } from "./models/groups";
import { Mutation } from "./models/mutation";
import { Tab } from "./models/tab";

export const groups: Record<string, Group> = {};
export const fields: Record<string, Field> = {};
export const tabs: Record<string, Tab> = {};

export const updatedIds: Mutation[] = [];
export const deletedIds: Mutation[] = [];
