'use strict';

function titleClickHandler(event){
  console.log('Link was clicked!');
  console.log(event);


  /* [DONE]remove class 'active' from all article links */

  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* add class 'active' to the clicked link */
  event.preventDefault();
  const clickedElement = this;

  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');

  /*  [DONE] remove class 'active' from all articles */

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
      optTitleListSelector = '.titles';


function generateTitleLinks(){

  /* remove contents of titleList */
  
  const titleList = document.querySelector(optTitleListSelector);
  console.log('titleList', titleList);

  function clearList(){
    titleList.innerHTML = '';
  }

  clearList();
  /* for each article */

  const articles = document.querySelectorAll(optArticleSelector);
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
    console.log('html', html);

  }
  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  console.log('links', links);
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}


generateTitleLinks();