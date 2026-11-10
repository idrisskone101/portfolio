/**
 * @typedef {Object} NavItem
 * @property {string} name
 * @property {string} path
 */

/**
 * @typedef {Object} SiteMetadata
 * @property {string} title
 * @property {string} titleTemplate
 * @property {string} description
 * @property {string} author
 */

/**
 * @typedef {Object} HomeProduct
 * @property {string} id
 * @property {string} title
 * @property {string} statusLabel
 * @property {string} href
 * @property {boolean} external
 */

/**
 * @typedef {'live' | 'in-development'} ProjectStatus
 */

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string | null} [image]
 * @property {string | null} [appStoreUrl]
 * @property {string | null} [liveUrl]
 * @property {string | null} [githubUrl]
 * @property {string} [category]
 * @property {ProjectStatus} [status]
 * @property {string} [statusLabel]
 * @property {boolean} [placeholder]
 * @property {{ name: string }[]} [technologies]
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
