import React from 'react';

const Breadcrumb = ({ crumbs }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex list-none p-0 m-0">
        {crumbs.map((crumb, index) => (
          <li key={index}>
            {index > 0 && <span className="mx-2">/</span>}
            <a href={crumb.href} className={index === crumbs.length - 1 ? 'font-bold' : ''}>{crumb.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;