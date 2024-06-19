class Stock < ApplicationRecord
  belongs_to :product

  validates :size, presence: true
  validates :amount, presence: true
  validates :product, presence: true
end
