# frozen_string_literal: true

class CategoryController < ApplicationController
  def show
    @category= Category.find(params[:id])
    @products = @category.products
  end
end
