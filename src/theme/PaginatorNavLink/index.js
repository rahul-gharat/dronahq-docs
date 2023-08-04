import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
export default function PaginatorNavLink(props) {
  const { permalink, title, subLabel, isNext } = props;

  let redirectLink = permalink;
  let redirectLabel = title;
  let qs = document.querySelector(`[headerlink="${redirectLink}"]`);
  try {
    if (redirectLink.indexOf("/_heading_") == 0) {
      if (isNext) {
        redirectLink = qs.nextElementSibling.getAttribute("headerlink");
      } else {
        redirectLink = qs.previousElementSibling.getAttribute("headerlink");
        redirectLabel = qs.previousElementSibling.getAttribute("headertext");
      }
    } else if (!isNext && qs.classList.contains("theme-doc-sidebar-item-category") &&
      qs.previousElementSibling.classList.contains("sidebar_heading")) {
      redirectLink = qs.previousElementSibling.previousElementSibling.getAttribute("headerlink");
      redirectLabel = qs.previousElementSibling.previousElementSibling.getAttribute("headertext");
    }
  } catch (ex) { }

  return (
    <Link
      className={clsx(
        'pagination-nav__link',
        isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev',
      )}
      to={redirectLink}>
      {subLabel && <div className="pagination-nav__sublabel">{subLabel}</div>}
      <div className="pagination-nav__label">{redirectLabel}</div>
    </Link>
  );
}
