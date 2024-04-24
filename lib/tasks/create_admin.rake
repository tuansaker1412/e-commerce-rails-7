namespace :admin do
  task :create, [:email, :password] => :environment do |task, args|
    email = args[:email]
    password = args[:password]

    unless email && password
      puts "Please provide both email and password."
      next
    end

    Admin.create(email: email, password: password)
  end
end
