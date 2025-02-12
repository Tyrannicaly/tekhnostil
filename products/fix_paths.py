import re
import sys
import os

def fix_paths(html_content):
    # Исправляем пути в тегах img: добавляем ../ перед image/
    html_content = re.sub(
        r'src="(/?image/)',  # Ищем src="/image/ или src="image/
        r'src="../image/',   # Заменяем на src="../image/
        html_content
    )
    return html_content

def main():
    if len(sys.argv) != 2:
        print("Использование: python script.py [filename]")
        print("Пример: python fix_paths.py index.html")
        return

    filename = sys.argv[1]
    
    if not os.path.exists(filename):
        print(f"Ошибка: Файл '{filename}' не найден")
        return

    try:
        # Чтение файла
        with open(filename, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Применение изменений
        modified_content = fix_paths(content)
        
        # Запись обратно в тот же файл
        with open(filename, 'w', encoding='utf-8') as file:
            file.write(modified_content)
            
        print(f"Файл '{filename}' успешно обновлен!")
        
    except Exception as e:
        print(f"Произошла ошибка: {str(e)}")

if __name__ == "__main__":
    main()
