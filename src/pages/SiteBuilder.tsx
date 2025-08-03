import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Block {
  id: string;
  type: string;
  title: string;
  description: string;
  preview: string;
  category: string;
}

const SiteBuilder = () => {
  const [selectedBlocks, setSelectedBlocks] = useState<Block[]>([]);
  const [activeCategory, setActiveCategory] = useState('headers');

  const blockCategories = [
    { id: 'headers', title: 'Заголовки', icon: 'Type' },
    { id: 'content', title: 'Контент', icon: 'FileText' },
    { id: 'gallery', title: 'Галерея', icon: 'Image' },
    { id: 'forms', title: 'Формы', icon: 'Mail' },
    { id: 'features', title: 'Особенности', icon: 'Star' },
    { id: 'pricing', title: 'Цены', icon: 'DollarSign' },
    { id: 'footer', title: 'Подвал', icon: 'Layout' }
  ];

  const blocks: Block[] = [
    {
      id: 'hero-1',
      type: 'hero',
      title: 'Герой с кнопкой',
      description: 'Главный экран с заголовком и призывом к действию',
      preview: 'https://via.placeholder.com/300x200/8FBC93/FFFFFF?text=Hero+Block',
      category: 'headers'
    },
    {
      id: 'hero-2',
      type: 'hero',
      title: 'Герой с видео',
      description: 'Главный экран с фоновым видео',
      preview: 'https://via.placeholder.com/300x200/C9B297/FFFFFF?text=Video+Hero',
      category: 'headers'
    },
    {
      id: 'about-1',
      type: 'about',
      title: 'О нас с картинкой',
      description: 'Блок с описанием и изображением сбоку',
      preview: 'https://via.placeholder.com/300x200/E9ACBB/FFFFFF?text=About+Us',
      category: 'content'
    },
    {
      id: 'features-1',
      type: 'features',
      title: '3 колонки преимуществ',
      description: 'Три колонки с иконками и описанием',
      preview: 'https://via.placeholder.com/300x200/FCEBBF/333333?text=Features',
      category: 'features'
    },
    {
      id: 'gallery-1',
      type: 'gallery',
      title: 'Сетка изображений',
      description: 'Галерея изображений в виде сетки',
      preview: 'https://via.placeholder.com/300x200/8FBC93/FFFFFF?text=Gallery',
      category: 'gallery'
    },
    {
      id: 'contact-1',
      type: 'contact',
      title: 'Форма обратной связи',
      description: 'Простая форма для связи с клиентами',
      preview: 'https://via.placeholder.com/300x200/C9B297/FFFFFF?text=Contact+Form',
      category: 'forms'
    },
    {
      id: 'pricing-1',
      type: 'pricing',
      title: 'Тарифные планы',
      description: 'Блок с ценами и пакетами услуг',
      preview: 'https://via.placeholder.com/300x200/E9ACBB/FFFFFF?text=Pricing',
      category: 'pricing'
    },
    {
      id: 'footer-1',
      type: 'footer',
      title: 'Простой футер',
      description: 'Подвал с контактами и ссылками',
      preview: 'https://via.placeholder.com/300x200/EEEFE8/333333?text=Footer',
      category: 'footer'
    }
  ];

  const filteredBlocks = blocks.filter(block => block.category === activeCategory);

  const addBlock = (block: Block) => {
    setSelectedBlocks([...selectedBlocks, { ...block, id: `${block.id}-${Date.now()}` }]);
  };

  const removeBlock = (blockId: string) => {
    setSelectedBlocks(selectedBlocks.filter(block => block.id !== blockId));
  };

  const moveBlock = (blockId: string, direction: 'up' | 'down') => {
    const index = selectedBlocks.findIndex(block => block.id === blockId);
    if (
      (direction === 'up' && index > 0) ||
      (direction === 'down' && index < selectedBlocks.length - 1)
    ) {
      const newBlocks = [...selectedBlocks];
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      [newBlocks[index], newBlocks[targetIndex]] = [newBlocks[targetIndex], newBlocks[index]];
      setSelectedBlocks(newBlocks);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="ArrowLeft" size={16} />
                Назад
              </Button>
              <h1 className="text-xl font-heading font-semibold">Конструктор сайтов</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Icon name="Eye" size={16} />
                Предпросмотр
              </Button>
              <Button size="sm">
                <Icon name="Save" size={16} />
                Сохранить
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar with blocks */}
        <div className="w-80 bg-white border-r overflow-y-auto">
          {/* Categories */}
          <div className="p-4 border-b">
            <h2 className="font-heading font-semibold mb-3">Блоки</h2>
            <div className="grid grid-cols-2 gap-2">
              {blockCategories.map(category => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  className="justify-start text-xs"
                  onClick={() => setActiveCategory(category.id)}
                >
                  <Icon name={category.icon as any} size={14} className="mr-1" />
                  {category.title}
                </Button>
              ))}
            </div>
          </div>

          {/* Block Library */}
          <div className="p-4">
            <div className="grid gap-3">
              {filteredBlocks.map(block => (
                <Card key={block.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-3">
                    <img
                      src={block.preview}
                      alt={block.title}
                      className="w-full h-24 object-cover rounded mb-2"
                    />
                    <h3 className="font-medium text-sm mb-1">{block.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{block.description}</p>
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={() => addBlock(block)}
                    >
                      <Icon name="Plus" size={14} />
                      Добавить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Main Canvas */}
        <div className="flex-1 flex">
          {/* Canvas */}
          <div className="flex-1 bg-gray-50 overflow-y-auto p-8">
            <div className="max-w-4xl mx-auto">
              {selectedBlocks.length === 0 ? (
                <div className="text-center py-20">
                  <Icon name="MousePointer" size={48} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Начните создавать сайт</h3>
                  <p className="text-muted-foreground">
                    Выберите блоки из библиотеки слева и добавьте их на страницу
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {selectedBlocks.map((block, index) => (
                    <div key={block.id} className="group relative">
                      <div className="border-2 border-dashed border-transparent group-hover:border-primary rounded-lg">
                        <img
                          src={block.preview}
                          alt={block.title}
                          className="w-full h-32 object-cover rounded"
                        />
                      </div>
                      
                      {/* Block Controls */}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="h-8 w-8 p-0"
                            onClick={() => moveBlock(block.id, 'up')}
                            disabled={index === 0}
                          >
                            <Icon name="ChevronUp" size={14} />
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="h-8 w-8 p-0"
                            onClick={() => moveBlock(block.id, 'down')}
                            disabled={index === selectedBlocks.length - 1}
                          >
                            <Icon name="ChevronDown" size={14} />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            className="h-8 w-8 p-0"
                            onClick={() => removeBlock(block.id)}
                          >
                            <Icon name="Trash2" size={14} />
                          </Button>
                        </div>
                      </div>

                      {/* Block Info */}
                      <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-black/75 text-white px-2 py-1 rounded text-xs">
                          {block.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Properties Panel */}
          <div className="w-80 bg-white border-l p-4">
            <h3 className="font-heading font-semibold mb-4">Настройки</h3>
            
            {selectedBlocks.length === 0 ? (
              <div className="text-center py-8">
                <Icon name="Settings" size={32} className="mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">
                  Выберите блок для настройки
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Структура страницы</label>
                  <div className="space-y-2">
                    {selectedBlocks.map((block, index) => (
                      <div key={block.id} className="flex items-center gap-2 p-2 rounded border">
                        <Icon name="GripVertical" size={14} className="text-muted-foreground" />
                        <span className="flex-1 text-sm">{block.title}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0"
                          onClick={() => removeBlock(block.id)}
                        >
                          <Icon name="X" size={12} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Общие настройки</label>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Icon name="Palette" size={14} />
                      Цвета и стили
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Icon name="Type" size={14} />
                      Шрифты
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Icon name="Smartphone" size={14} />
                      Адаптивность
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteBuilder;