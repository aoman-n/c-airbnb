class CreateFavoriteFolders < ActiveRecord::Migration[5.0]
  def change
    create_table :favorite_folders do |t|
      t.references :user, foreign_key: true, null: false
      t.string     :name, null: false
      t.timestamps
    end
  end
end
