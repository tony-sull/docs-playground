export interface Site {
    title: string
    description: string
    image: {
        src: string
        alt: string
    }
    twitterHandle?: string
}

const site: Site = {
    title: 'Documentation',
	description: 'Your website description.',
    image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitterHandle: 'astrodotbuild',
}

export default site
