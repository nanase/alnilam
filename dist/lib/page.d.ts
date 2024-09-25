export interface Page {
    id: string;
    title: string;
    menuTitle?: string;
    description?: string;
    path?: string;
    icon?: string;
}
export interface PageSection {
    id: string;
    name: string;
    pages: Page[];
}
//# sourceMappingURL=page.d.ts.map