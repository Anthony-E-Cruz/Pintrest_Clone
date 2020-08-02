class User < ApplicationRecord
  # validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :age, presence: true

  after_initialize :ensure_session_token!

  has_many :pins,
    foreign_key: :user_id,
    class_name: :Pin

  has_many :boards,
    foreign_key: :creator_id,
    class_name: :Pin

  attr_reader :password

  # has_one_attached :photo

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
     BCrypt::Password.new(self.password_digest).is_password?(password)
  end 

  def reset_session_token!
    self.session_token = SecureRandom::base64(64)
    self.save!
    self.session_token
  end 

  def ensure_session_token!
    self.session_token ||= SecureRandom::base64(64)
  end 

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    if !@user.nil? && @user.is_password?(password)
      @user
    else
      nil
    end 
  end 
end
