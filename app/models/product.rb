class Product < ApplicationRecord
  has_many_attached :images do |attachable|
    attachable.variant :thumb, resize_to_limit: [50, 50]
  end
  belongs_to :category
  has_many :stocks
  has_many :order_products

  validates :name, presence: true
  validates :price, presence: true
  validates :category, presence: true
end
