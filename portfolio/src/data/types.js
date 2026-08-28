/**
 * @typedef {Object} NavItem
 * @property {string} name
 * @property {string} path
 */

/**
 * @typedef {Object} SocialLink
 * @property {string} id
 * @property {string} label
 * @property {string} href
 * @property {'github' | 'linkedin' | 'mail' | 'twitter' | 'instagram'} icon
 * @property {boolean} [placeholder]
 */

/**
 * @typedef {Object} ServiceOffering
 * @property {string} id
 * @property {string} number
 * @property {string} title
 * @property {string} description
 * @property {boolean} placeholder
 */

/**
 * @typedef {Object} NewsArticle
 * @property {string} slug
 * @property {string} title
 * @property {string} date
 * @property {string} excerpt
 * @property {string[]} paragraphs
 * @property {boolean} placeholder
 */

/**
 * @typedef {Object} BlogPost
 * @property {string} id
 * @property {string} title
 * @property {string} brief
 * @property {string} url
 * @property {string} publishedAt
 * @property {string | null} coverImageUrl
 * @property {boolean} placeholder
 * @property {'hashnode' | 'placeholder'} source
 */

/**
 * @typedef {Object} ContactMapPin
 * @property {number} lat
 * @property {number} lng
 * @property {number} zoom
 * @property {string} label
 */

export {};
