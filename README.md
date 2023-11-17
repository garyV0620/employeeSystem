# Employee System 
This App is a Employee System that you can login and register account.
You can also perform CRUD operation on Employee list (CREATE READ UPDATE DELETE)

## About
This project uses laravel framework with React JS.
It uses JavaScript, TailWind CSS, CSS.
It also uses Laravel Breeze.

## Getting Started
You can clone the repository or download it 

### Prerequisites
-PHP 8.0 and Up, SQL, Or you can use local server such as WAMP or XAMP or LAMP, COMPOSER, NODE JS, GIT

## Installation

Follow these steps to install and set up the project:

1. **Clone the Repository:**
   ```bash
   $ $ git clone 'repository'
   $ cd employeeSystem
   
2. Install Composer Dependencies:
    Run the following command on your command prompt or terminal:
    ```bash
   $ composer install

3. Install Node.js Dependencies:
    Run the following command on your terminal:
     ```bash
   $ npm install
     
4. Copy .env.example file to .env on the root folder.
	
5. Database Configuration:
    Edit the .env file and update the database settings according to your setup. For MariaDB, use the following configuration:
    ```dotenv
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=employee_system
    DB_USERNAME=root
    DB_PASSWORD=
    ```  
    Alternatively, for SQLite, comment out the MySQL settings and use:
     ```dotenv
    DB_CONNECTION=sqlite
    ```
   

6. Generate an Encryption Key:
   Run the following command to generate an application encryption key:
    ```bash
    $ php artisan key:generate
    
7. Run Database Migrations:
   Execute the following command to run database migrations:
    ```bash
    $ php artisan migrate:fresh
    ```
     type 'yes' if prompt to create.
8. Run the Application: To run the application, follow these steps:

    8.1. Run the development build  
    ```bash
    $ npm run dev
    ```
    If you want to use a custom host and port:
    ```bash
    $ npm run dev -- --host=yourhostORIp --port=yourPort
    ```
    
    8.2. Open another terminal.
    
    8.3. Start the PHP development server:
    ```bash
    $ php artisan serve
    ```
    If you want to use a custom host and port:
    ```bash
    $ php artisan serve --host=yourhostORIp --port=yourPort
    ```
    
    **Note:** Do not use the same port as the one used for `npm run dev`.
    
    8.4. Check the INFO message: Server running on [http://127.0.0.1:8001].
    
    8.4. Open [http://127.0.0.1:8001] in your web browser.

9. Enjoy using the APP (you can register by clicking Register Account)