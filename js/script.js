'use strict';

function titleClickHandler(event){
  console.log('Link was clicked!');
  console.log(event);


  /* remove class 'active' from all article links */

  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* add class 'active' to the clicked link */
  event.preventDefault();
  const clickedElement = this;

  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');

  /* remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts .active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log('hrefArticle', articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log('targetArticle', targetArticle);

  /* add class 'active' to the correct article */

  targetArticle.classList.add('active');
  console.log('newTarget', targetArticle);
}


const optArticleSelector = '.post',
      optTitleSelector = '.post-title',
      optTitleListSelector = '.titles',
      optArticleTagsSelector = '.post-tags .list',
      optArticleAuthorSelector = '.post-author';


function generateTitleLinks(customSelector = ''){

  /* remove contents of titleList */
  
  const titleList = document.querySelector(optTitleListSelector);
  console.log('titleList', titleList);

  function clearList(){
    titleList.innerHTML = '';
  }

  clearList();
  /* for each article */

  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  console.log('article', articles);


  let html = '';

  for(let article of articles){
  
  /* get the article id */
    
    const articleId = article.getAttribute('id');
    console.log('id', articleId);
  
  /* find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
  
  /* get the title from the title element */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('link', linkHTML);

  /* insert link into titleList */
    
    html = html + linkHTML;
    console.log('htmlLink', html);

  }
  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  console.log('links', links);
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}


generateTitleLinks();

function generateTags(){
  /* find all articles */

    const articles = document.querySelectorAll(optArticleSelector);
    console.log('article', articles);

  /* START LOOP: for every article: */

  for(let article of articles){
 
    /* find tags wrapper */
 
    const tagList = article.querySelector(optArticleTagsSelector);
    console.log('tagList', tagList);
 
    /* make html variable with empty string */

    let html = '';
    
    /* get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');
    console.log('articletag', articleTags);

    /* split tags into array */

    const articleTagsArray = articleTags.split(' ');
    console.log('articleTagsArray', articleTagsArray);
    
    /* START LOOP: for each tag */

    for (let tag of articleTagsArray){
      console.log('tag', tag)

      /* generate HTML of the link */

      const tagHTML = '<li><a href="#' + "tag-" + tag + '"><span>' + tag + '</span></a></li>';
      console.log('tag', tagHTML);

      /* add generated code to html variable */
      html = html + tagHTML;
      console.log('htmltag', html);
    }
    /* END LOOP: for each tag */
  
    /*insert HTML of all the links into the tags wrapper */
    /*tagList.innerHTML = html;*/


  /* END LOOP: for every article: */
  }

}

generateTags();


function generateAuthors(){
  
  /* find all articles */
  
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('article', articles);
  
  const authorsList = document.querySelectorAll(optArticleAuthorSelector);
  console.log('authorList', authorsList);

  /* START LOOP: for every article: */
  let html = '';
  
  for (let article of articles){
  
  const articleAuthor = article.getAttribute('data-author');
  console.log('author', articleAuthor);
  
  const authorHTML = '<li><a href="#' +  articleAuthor + '"></a></li>';
  console.log('authorHTML', authorHTML);

  html = html + authorHTML;
  console.log('htmlAuthor', html);
  }
  authorsList.innerHTML = html;
  console.log('autorList', authorsList); 
}

generateAuthors();


function authorClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('hrefAuthor', href);
  
  /* find all author links with class active */
  const activeAuthors = document.querySelectorAll('a.active[href="' + href + '"]');
  /* START LOOP: for each active author link */
  for (let activeAuthor of activeAuthors) {
    /* remove class active */
    activeAuthor.classList.remove('active');
  /* END LOOP: for each active author link */
  }
  /* find all author links with "href" attribute equal to the "href" constant */
  const activeAuthorsHref = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found author link */
  for(let foundAuthor of activeAuthorsHref){
    /* add class active */
    foundeAuthor.classList.add('active');
  }

  /* END LOOP: for each found author link */

  /* execute function "generateTitleLinks" with article selector as argument */
generateTitleLinks('[data-author="' + href + '"]');
}

function addClickListenersToAuthors(){
  /* find all links to author */
  const linksAuthors = document.querySelectorAll(generateTitleLinks);
  console.log('links', linksAuthors);
  /* START LOOP: for each link */
  for (let link of linksAuthors){
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', authorClickHandler);
  }
}

  /* END LOOP: for each link */

addClickListenersToAuthors();