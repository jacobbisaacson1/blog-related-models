## To do list

* article show page -- should contain all the article info, including the author's name
  * **hint**: Article show page should include author name using `.populate()`
  * you will have to restructure the query -- done


* author show page shoudl include a list of their articles, which should be links that you can click on to go to that article's show page
  * **hint**: Accomplish this by adding a second query using Article model _inside the `else`_.  In that inner callback, use a different variable name for the error, since you're already inside an outer callback with an error parameter.

  
* you should be able to delete the article (maybe from show page?)
* user should be able to edit and update articles, including changing the author (after update, redirect back to show page?)
  * **hint** Nest an `Author.find()` inside of the `Article.find()` 
* deleting an author should delete all the articles by that author -- do it manually in the author destroy ("destroy")
  * **hint** you will have to manually delete all the articles.  Could you do this with `.remove()` and `$in`?

[mongoose populate](https://mongoosejs.com/docs/populate.html) 


### possible commits

* article show page 
* author show includes article links
* article delete
* article edit page that includes author drop down
* original author is already selected on author drop down on author edit page
* article update works
* adjusted author destroy: deleting an author also deletes their articles