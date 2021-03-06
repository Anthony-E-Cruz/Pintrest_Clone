class Api::SessionsController < ApplicationController

  def create 
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    # valid_email = User.find_by_credentials(
    #   params[:user][:email]
    # )
    # if !valid_email
    #   render json: ['The email you entered does not belong to any account.'], status: 401
    # end 
    if @user 
      sign_in(@user)
      render "api/users/show"
    else
      render json: ['The password you entered is incorrect.'], status: 401
    end 
  end 

  def destroy
    @user = current_user
    if @user 
      sign_out!
      render "api/users/show"
    else
      render json: ["no current user"], status: 404 
    end 
  end 
end
