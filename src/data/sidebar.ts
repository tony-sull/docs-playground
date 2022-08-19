export interface SidebarHeader {
    text: string
    header: true
}

export interface SidebarLink {
    text: string
    link: string
}

export type SidebarItem = SidebarHeader | SidebarLink

export function isHeader(item: SidebarItem): item is SidebarHeader {
    return 'header' in item
}

const sidebar: { [lang: string]: SidebarItem[] } = {
	en: [
		{ text: 'Section Header', header: true },
		{ text: 'Introduction', link: '/introduction' },
		{ text: 'Page 2', link: '/page-2' },
		{ text: 'Page 3', link: '/page-3' },

		{ text: 'Another Section', header: true },
		{ text: 'Page 4', link: '/page-4' },
	],
}

export default sidebar
