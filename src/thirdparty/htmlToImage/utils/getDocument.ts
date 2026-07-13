import { isElementNode } from './checkElement';

const getDocument = <T extends Node>(target?: T | null): Document => {
  return ((target && isElementNode(target as any) ? target?.ownerDocument : target) ??
    globalThis.document) as any;
};

export default getDocument;
