# Тестовое задание от АРМО-Системы

## Запуск сервера на Tornado Web Server
```bash
~/armo-test 
$: cd server

# Установка виртуального окружения
~/armo-test/server 
$: python -m venv env

# Активация вирутального окружения
~/armo-test/server 
$: cd env/Scripts

~/armo-test/server/env/Scripts 
$: activate.bat

# Установка зависимостей
~/armo-test/server/env/Scripts 
$: cd ../..

~/armo-test/server 
$: pip install -r requirements.txt

~/armo-test/server 
$: python main.py
```

После установки зависимостей и запуска `main.py` появится сообщение:
```bash
~/armo-test/server 
$: Server started at http://localhost:8888
```

## Запуск клиента на ElectronJS
```bash
~/armo-test 
$: cd client

#Установка зависимотей и запуск
~/armo-test/client
$: npm install && npm run start
```

После запуска откроется окно приложения с кнопкой. Если нажать на ее, отправится запрос на сервер. После успешного запроса на экране появятся карточки с ифнормацией. Если запрос провалился, то вместо карточек появится текст с ошибкой