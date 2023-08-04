import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function PaginatorNavLink(props) {
  const { permalink, title, subLabel, isNext } = props;

  let redirectLink = permalink;
  let redirectLabel = title;

  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        // let qs = document.querySelector(`[headerlink="${redirectLink}"]`);
        // try {
        //   if (redirectLink.indexOf("/_heading_") == 0) {
        //     if (isNext) {
        //       redirectLink = qs.nextElementSibling.getAttribute("headerlink");
        //     } else {
        //       redirectLink = qs.previousElementSibling.getAttribute("headerlink");
        //       redirectLabel = qs.previousElementSibling.getAttribute("headertext");
        //     }
        //   } else if (!isNext && qs.classList.contains("theme-doc-sidebar-item-category")) {
        //     if (!qs.previousElementSibling.classList.contains("sidebar_heading")) {
        //       redirectLink = qs.previousElementSibling.getAttribute("headerlink");
        //       redirectLabel = qs.previousElementSibling.getAttribute("headertext");
        //     } else {
        //       redirectLink = qs.previousElementSibling.previousElementSibling.getAttribute("headerlink");
        //       redirectLabel = qs.previousElementSibling.previousElementSibling.getAttribute("headertext");
        //     }
        //   }
        // } catch (ex) { }
        let qs = document.querySelector(`[headerlink="${redirectLink}"]`);
        try {
          let prevElement = qs?.previousElementSibling;
          if (redirectLink.startsWith("/_heading_")) {
            redirectLink = isNext ? qs?.nextElementSibling?.getAttribute("headerlink") : prevElement?.getAttribute("headerlink");
            redirectLabel = !isNext ? prevElement?.getAttribute("headertext") : redirectLabel;
          } else if (!isNext && qs?.classList.contains("theme-doc-sidebar-item-category")) {
            let isNotSidebarHeading = !prevElement?.classList.contains("sidebar_heading");
            let prevPrevElement = prevElement?.previousElementSibling;
            redirectLink = isNotSidebarHeading ? prevElement?.getAttribute("headerlink") : prevPrevElement?.getAttribute("headerlink");
            redirectLabel = isNotSidebarHeading ? prevElement?.getAttribute("headertext") : prevPrevElement?.getAttribute("headertext");
          }
        } catch (ex) { }
        return <Link
          className={clsx(
            'pagination-nav__link',
            isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev',
          )}
          to={redirectLink}>
          {subLabel && <div className="pagination-nav__sublabel">{subLabel}</div>}
          <div className="pagination-nav__label">{redirectLabel}</div>
        </Link>
      }}
    </BrowserOnly>
  );
}
