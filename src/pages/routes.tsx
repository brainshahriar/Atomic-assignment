import Home from "pages/home";
import AccountSettings from "./user-settings";
import AgentSettings from "./agent-settings";
import AgentTransactions from "./agent/transactions";
import AgentWallet from "./agent/wallet";
import AdminAddCard from "./addCard";
import UserTransactions from "./user/transactions";
import UserTrade from "./user/trade";
import UserStatistics from "./user/statistics";
import UserOverview from "./user/overview";
import UserReferral from "./user/referral";
import UserLogout from "./user/logout";
import AgentUsers from "./agent/users";
import AgentsTrade from "./agent/trade";
import AgentsReferral from "./agent/referral";
import AgentLogout from "./agent/logout";
import AdminAddBitCoin from "./add-bitCoin&Etherum";
import WalletPage from "./wallet";
import AdminOverview from "./admin/overview";
import AdminUsers from "./admin/users";
import AdminCards from "./admin/cards";
import AdminUsersView from "./admin/users/view";
import AdminPayments from "./admin/payments";
import AdminAgents from "./admin/agents";
import AdminBitcoinEtherium from "./admin/bitcoinEtherium";
import AdminAgentsView from "./admin/agents/view";
import AdminLogout from "./admin/logout";
import AdminTransactions from "./admin/transactions";
import AgentOverview from "./agent/overview";
import AdminStatistics from "./admin/statistics";
import AgentStatistics from "./agent/statistics";
import { Route, Switch } from "react-router-dom";

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/user/overview" component={UserOverview} />
      <Route exact path="/user/trade" component={UserTrade} />
      <Route exact path="/user/settings" component={AccountSettings} />
      <Route exact path="/user/wallet" component={WalletPage} />
      <Route exact path="/user/referral" component={UserReferral} />
      <Route exact path="/user/statistics" component={UserStatistics} />
      <Route exact path="/agent/overview" component={AgentOverview} />
      <Route exact path="/user/logout" component={UserLogout} />
      <Route exact path="/agent/settings" component={AgentSettings} />
      <Route exact path="/agent/transactions" component={AgentTransactions} />
      <Route exact path="/agent/wallet" component={AgentWallet} />
      <Route exact path="/agent/trade" component={AgentsTrade} />
      <Route exact path="/agent/users" component={AgentUsers} />
      <Route exact path="/agent/referral" component={AgentsReferral} />
      <Route exact path="/agent/logout" component={AgentLogout} />
      <Route exact path="/admin/cards" component={AdminCards} />
      <Route exact path="/admin/addcard" component={AdminAddCard} />
      <Route exact path="/user/transactions" component={UserTransactions} />
      <Route exact path="/admin/addbitcoin" component={AdminAddBitCoin} />
      <Route
        exact
        path="/admin/bitcoin-etherium"
        component={AdminBitcoinEtherium}
      />
      <Route exact path="/admin/users" component={AdminUsers} />
      <Route exact path="/admin/overview" component={AdminOverview} />
      <Route exact path="/admin/users/id" component={AdminUsersView} />
      <Route exact path="/admin/payments" component={AdminPayments} />
      <Route exact path="/admin/agents" component={AdminAgents} />
      <Route exact path="/admin/agents/id" component={AdminAgentsView} />
      <Route exact path="/admin/transactions" component={AdminTransactions} />
      <Route exact path="/admin/logout" component={AdminLogout} />
      <Route exact path="/admin/statistics" component={AdminStatistics} />
      <Route exact path="/agent/statistics" component={AgentStatistics} />
    </Switch>
  </>
);

export default Routes;
