class Addtousers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :about_you, :string
    add_column :users, :location, :string
  end
end
