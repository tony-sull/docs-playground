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
		{ text: '', header: true },
		{ text: 'Section Header', header: true },
		{ text: 'Introduction', link: '/en/introduction' },
		{ text: 'Page 2', link: '/en/page-2' },
		{ text: 'Page 3', link: '/en/page-3' },

		{ text: 'Another Section', header: true },
		{ text: 'Page 4', link: '/en/page-4' },
	],
}

export default sidebar
