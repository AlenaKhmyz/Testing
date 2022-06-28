// import { render, screen, fireEvent, queryByTestId } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
// import App from './App';

// describe ('TEST API', () => {
//   test('renders learn react link', () => {
//     render(<App />); //передается компонент, который хотим протестировать
//     const hiElement = screen.getByText(/hi/i);//здесь получаем при помощи объекта screen какой-то элемент
//     const btnElement = screen.getByRole('button');
//     const inputElement = screen.getByPlaceholderText(/input value/i);
//     expect(hiElement).toBeInTheDocument();
//     expect(btnElement).toBeInTheDocument();
//     expect(inputElement).toMatchSnapshot();
//     screen.debug()//помогает с поиском ошибки
//   });

//   test('renders learn react link', async () => {
//     render(<App />);
//     screen.debug()
//     const hiElement = await screen.findByText(/data/i);
//     expect(hiElement).toBeInTheDocument();
//     expect(hiElement).toHaveStyle({color: 'blue'})
//     screen.debug()
//   });

//   test('click event', () => {
//     render(<App />);
//      const btn = screen.getByTestId('toggle-btn');
//      expect(screen.queryByTestId('toggle-elem')).toBeNull()
//      fireEvent.click(btn)//предназначен для работы с событиями
//      expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
//      fireEvent.click(btn)
//      expect(screen.queryByTestId('toggle-elem')).toBeNull()
//   });

//    test('input event', () => {
//     render(<App />);
//      const input = screen.getByPlaceholderText(/input value/i);
//      expect(screen.queryByTestId('value-elem')).toContainHTML('')
    //  Искусственное событие
    //  fireEvent.input(input, {
    //   target: { value: '123123' }
    //  })
     //Близко к пользователю, обрабатываются события нажатия клавиш и т.д.
//      userEvent.type(input, '123123')
//      expect(screen.queryByTestId('value-elem')).toContainHTML('123123')
//   });
// })