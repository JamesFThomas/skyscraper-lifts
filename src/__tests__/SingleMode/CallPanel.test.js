import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/TestingWrapper';
import CallPanel from '../../components/singleMode/liftParts/CallPanel';
import { wait } from '@testing-library/user-event/dist/cjs/utils/index.js';

describe('CallPanel component testing suite', () => {
  it('Component successfully renders', () => {
    renderWithProviders(<CallPanel />);

    const callPanel = screen.getByTestId('call-panel');

    expect(callPanel).toBeInTheDocument();
  });

  it('Component renders with display text', () => {
    renderWithProviders(<CallPanel />);

    const panelText = screen.getByTestId('callPanel-title');

    expect(panelText).toBeInTheDocument();
    expect(panelText).toHaveTextContent('Press');
  });
  it('Call button changes style after being clicked', async () => {
    renderWithProviders(<CallPanel />);

    const callButton = screen.getByTestId('call-button');

    expect(callButton).toBeInTheDocument();

    fireEvent.click(callButton);

    await wait(2);
    const waitButton = screen.getByTestId('wait-button');
    expect(waitButton).toBeInTheDocument();
    expect(screen.queryByTestId('call-button')).not.toBeInTheDocument();
  });
});
