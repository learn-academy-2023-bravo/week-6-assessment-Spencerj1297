# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This is the main controller for the application that was created during the terminal setup
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # This is a new method defined by the common name of index. Inside of this method is the instance variable post denoted with the @ symbol. All of these can be found in the schema. Inside the variable they are accessing all of the blog post by using the .all method. Note that BlogPost is singular to follow Ruby convention. 
    @posts = BlogPost.all
  end

  # ---3)
  # The code is following CRUD(Create, Read, Update, Delete). They use the RESTful route show for defining this method. Here again the instance variable post is used. Inside the variable is BlogPost again but now it has the .find method attached. This will locate the value that meets the params(parameters) of what is passed in. Here they are locating the symbol :id. This section of the controller would fall under Read in CRUD since they are simply locating and displaying data. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # This next method follows the same layout as the last with a few execptions. They are using the route new. This RESTful route is for displaying a form. Here there is no need for params because this method will be used to make new data that has a seperate :id.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # Next, they are using the RESTful route create that will be used to push new data to the database. They have given this route private params that are defined at the bottom of the controller so they do not interfer with the other routes. Then they have used a simple conditional to check if the params the user inputs are correct (valid). If they are the user is then redirected back to the main page. This would be the C in CRUD and would have post as the appropriate HTTP verb. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # This route acts much like the 'new' route. It is used for returning an HTML for for editing. It would have get as the correct HTTP verb.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Update is the RESTful route for changing data. Here they are doing the same thing done in create by checking the private params with the if statement. If the params are correct the desired data is changed and the user is redirected to the main page. The correct HTTP verb that goes with this RESTful route is Patch or Put. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This is the conditional for the RESTful route destroy. At this point in the method the user has been able to get the desired post with .find. Now they can destroy the data with the HTTP verb destroy which falls under D in CRUD. After they have succefully destroyed the data they are then redirected to the main page. 
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # This route known as private or strong params is used to help with security of the data sent through forms. Allowing the programmer to set which params are accepted. 
  private
  def blog_post_params
    # ---10) 
    # In the private params they are specifying what is permitted for all methods using strong params. Here they only want to allow the two symbols title and content. The point of this is to only allow sharing the needed information for user input
    params.require(:blog_post).permit(:title, :content)
  end
end
