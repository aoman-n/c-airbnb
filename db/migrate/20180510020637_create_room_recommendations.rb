class CreateRoomRecommendations < ActiveRecord::Migration[5.0]
  def change
    create_table :room_recommendations do |t|
      t.references :room, foreign_key: true, null: false
      t.references :recommendation, foreign_key: true, null: false
      t.timestamps
    end
  end
end
