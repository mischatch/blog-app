class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.location :location
      t.string :price
      t.string :time, null: false
    end
  end
end
