class ChangeUsersRef < ActiveRecord::Migration[5.0]
  def change
    change_table :users do |t|
      t.remove :username, :password_digest, :session_token, :email
      t.string :username,      null: false
      t.string :password_digest,      null: false
      t.string :session_token,      null: false
      t.string :email,      null: false
      t.index :username
      t.index :email
      t.index :session_token 
    end
  end
end
