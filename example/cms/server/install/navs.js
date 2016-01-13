/* This file will insert neccessay data on start up to
 * setup basic features.
 *
 */
Meteor.startup(function () {

  // Navigations
  if (navs.find().count() == 0){
    var data = [
      // CMS
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "settings/list",
        "target" : "_self",
        "text" : "Settings"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "navs/list",
        "target" : "_self",
        "text" : "Navigations"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "profiles/list",
        "target" : "_self",
        "text" : "User Profiles"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "pages/list",
        "target" : "_self",
        "text" : "Pages"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "blogcategories/list",
        "target" : "_self",
        "text" : "Blog Categories"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "blogs/list",
        "target" : "_self",
        "text" : "Blogs"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "comments/list",
        "target" : "_self",
        "text" : "Comments"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "portfoliocategories/list",
        "target" : "_self",
        "text" : "Portfolio Categories"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "portfolios/list",
        "target" : "_self",
        "text" : "Portfolios"
      },
      // APP
      {
        "prefix" : "",
        "type" : "internal",
        "href" : "blog",
        "target" : "_self",
        "text" : "Blog"
      },
      {
        "prefix" : "",
        "type" : "internal",
        "href" : "our-portfolio",
        "target" : "_self",
        "text" : "Our Portfolio"
      }
    ];

    for(var i = 0; i < data.length; i++){
      navs.insert(data[i]);
    }
  }
});