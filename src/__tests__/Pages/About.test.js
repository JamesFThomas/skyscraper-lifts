import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import About from '../../components/pages/About';

const mockData = {
  auto: {
    Title: 'auto text',
    Desc: 'auto desc',
    List: ['auto list item 1', 'auto list item 2'],
  },
  single: 'single text',
  con1: 'con1 text',
  con2: 'con2 text',
  con3: 'con2 text',
};

const TestWrapper = () => {
  return render(<About aboutData={mockData} />);
};

describe('About page testing suite', () => {
  xit('Component successfully renders in container', () => {
    TestWrapper();
    const pageContainer = screen.getByTestId('AboutPage');
    expect(pageContainer).toBeTruthy();
  });

  xit('Component successfully renders with title', () => {
    TestWrapper();

    const pageTitle = screen.getByTestId('AboutPage-title');
    expect(pageTitle).toBeTruthy();
    expect(pageTitle).toHaveTextContent('About This Application');
  });
  xit('Component renders with 3 information sections', () => {
    TestWrapper();

    const sections = screen.getAllByTestId(/sectionTitle/i);
    expect(sections).toHaveLength(3);
    expect(sections[0]).toHaveTextContent('Application Objective');
    expect(sections[1]).toHaveTextContent('Application Modes');
    expect(sections[2]).toHaveTextContent('Application Constraints');
  });
  it('Component renders with 5 buttons', async () => {
    let buttons;
    let firstButton;
    let dialogTitle;
    TestWrapper();

    buttons = screen.getAllByRole('button');
    firstButton = buttons[0];

    expect(buttons).toHaveLength(5);
    expect(firstButton).toHaveTextContent('auto text');

    fireEvent.click(firstButton);
    await waitFor(() => {
      dialogTitle = screen.getByTestId('dialogTitle');
      expect(dialogTitle).toBeInTheDocument();
    });
  });
});
