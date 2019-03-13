Rails.application.routes.draw do
  resource :images

  root 'application#root'
end
