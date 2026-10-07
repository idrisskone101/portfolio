/**
 * @param {import('./types.js').PortfolioProject} project
 * @returns {import('./types.js').ProjectLink[]}
 */
export function getProjectLinks(project) {
  const links = [];

  if (project.appStoreUrl) {
    links.push({
      id: 'app-store',
      label: 'App Store',
      href: project.appStoreUrl,
    });
  }

  if (project.githubUrl) {
    links.push({
      id: 'github',
      label: 'GitHub',
      href: project.githubUrl,
    });
  }

  if (project.liveUrl) {
    links.push({
      id: 'live',
      label: 'Live Preview',
      href: project.liveUrl,
    });
  }

  return links;
}
