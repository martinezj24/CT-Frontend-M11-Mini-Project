import mysql.connector

host = 'localhost'
user = 'root'
password = 'Martinez!1996'
database = 'ecomm_db'

def db_connection():
    try:
        connection = mysql.connector.connect(
        host=host,
        user=user,
        password=password,
        database=database
    )

        if connection.is_connected():
            print('Connected to MySQL database')

    except mysql.connector.Error as e:
        print(f'Error connecting to MySQL: {e}')

    

db_connection()

# This is just to show that I know how to create a MySQL DB connection, however Im not sure how to 
# correctly implement this into the react project to truly show the extent
# of my app and its capabilities