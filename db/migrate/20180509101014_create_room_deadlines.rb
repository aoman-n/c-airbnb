class CreateRoomDeadlines < ActiveRecord::Migration[5.0]
  def change
    create_table :room_deadlines do |t|
      t.date :date, null: false
      t.timestamps
    end
  end
end